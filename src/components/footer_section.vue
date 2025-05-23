<template>
  <footer class="bg-zinc-800 text-zinc-400 py-6 px-6 lg:px-24 flex flex-col sm:flex-row items-start sm:items-center justify-between text-left gap-2 sm:gap-4">
    <p class="md:text-sm text-xs text-accent">
      <span v-if="githubCommits !== null">
        {{ githubCommits }} total 
        <a 
          href="https://github.com/GOULASHSUP" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="text-accent hover:text-zinc-200 transition duration-300 ease-in-out"
        >
          GitHub
        </a> 
        commits this year
      </span>
      <span v-else>Loading commits...</span>
    </p>
    <p class="md:text-sm text-xs ">Current time: {{ currentTime }}</p>
    <p class="md:text-sm text-xs ">&copy; {{ new Date().getFullYear() }} Made by: Simon Jobbágy. All rights reserved.</p>
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