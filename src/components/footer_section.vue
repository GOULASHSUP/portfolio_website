<template>
  <footer class="bg-zinc-800 text-zinc-400 py-6 px-6 sm:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between text-left gap-2 sm:gap-4">
    <p class="text-sm text-accent">
      <span v-if="githubCommits !== null">{{ githubCommits }} total GitHub commits this year</span>
      <span v-else>Loading commits...</span>
    </p>
    <p class="text-sm">Current time: {{ currentTime }}</p>
    <p class="text-sm">&copy; {{ new Date().getFullYear() }} Simon Jobbágy. All rights reserved.</p>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const currentTime = ref(new Date().toLocaleTimeString());
const githubCommits = ref(null);

const updateClock = () => {
  currentTime.value = new Date().toLocaleTimeString();
};

let intervalId;
onMounted(() => {
  intervalId = setInterval(updateClock, 1000);
  fetchGitHubCommits();
});

onUnmounted(() => {
  clearInterval(intervalId);
});

const fetchGitHubCommits = async () => {
  try {
    const username = "GOULASHSUP";
    const token = import.meta.env.VITE_GITHUB_TOKEN;

    const query = `
      query {
        user(login: "${username}") {
          repositories(first: 100) {
            nodes {
              defaultBranchRef {
                target {
                  ... on Commit {
                    history(since: "${new Date().getFullYear()}-01-01T00:00:00Z") {
                      totalCount
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();

    if (data.errors) {
      console.error("GitHub API Error:", data.errors);
      githubCommits.value = "N/A";
      return;
    }

    const totalCommits = data.data.user.repositories.nodes.reduce((sum, repo) => {
      return sum + (repo.defaultBranchRef?.target?.history?.totalCount || 0);
    }, 0);

    githubCommits.value = totalCommits;
  } catch (error) {
    console.error("Error fetching GitHub commits:", error);
    githubCommits.value = "N/A";
  }
};
</script>