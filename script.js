(function () {
  const commitLog = document.querySelector('.commit-log');
  if (!commitLog) return;

  commitLog.querySelectorAll('.commit').forEach((commit, index) => {
    commit.style.setProperty('--i', index);
  });

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(commitLog);
})();
