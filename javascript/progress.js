document.addEventListener('DOMContentLoaded', function () {
    const tasks = document.querySelectorAll('.gantt-task');
    const dayWidth = 80; // Width of each date column, adjust as needed

    tasks.forEach((task, index) => {
        const start = parseInt(task.getAttribute('data-start'));
        const end = parseInt(task.getAttribute('data-end'));

        // Calculate the width based on the number of days
        const width = (end - start + 1) * dayWidth;

        // Position the task horizontally based on start date
        task.style.left = `${start * dayWidth}px`;
        task.style.width = `${width}px`;

        // Ensure each task is vertically spaced
        task.style.top = `${index * (30 + 10)}px`; // 30px for height + 10px for margin
    });
});
