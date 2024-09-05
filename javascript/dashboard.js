document.addEventListener('DOMContentLoaded', () => {
    const dateElement = document.getElementById('current-date');
    const dayElement = document.getElementById('current-day');
    const timeElement = document.getElementById('current-time');
    const noteInput = document.getElementById('note-input');
    const addNoteBtn = document.getElementById('add-note-btn');
    const noteList = document.getElementById('note-list');
    const joinProgressPopup = document.getElementById('join-progress-popup');
    const submitJoinBtn = document.getElementById('submit-join');
    const cancelJoinBtn = document.getElementById('cancel-join');
    const joinNowBtn = document.getElementById('join-now-btn');
    const joinNowBtnImage = document.getElementById('join-now-btn-image');
    const notificationIcon = document.getElementById('notif');
    const notificationPopup = document.getElementById('notification-popup');

    function updateDateTime() {
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const dayOptions = { weekday: 'long' };
        const timeOptions = { hour: '2-digit', minute: '2-digit' };

        const dateString = today.toLocaleDateString(undefined, options);
        const dayString = today.toLocaleDateString(undefined, dayOptions);
        const timeString = today.toLocaleTimeString(undefined, timeOptions);

        dateElement.innerHTML = dateString;
        dayElement.innerHTML = dayString;
        timeElement.innerHTML = timeString;

        document.documentElement.style.setProperty('--date-color', 'white');
        document.documentElement.style.setProperty('--time-color', 'white');
    }

    function addNote() {
        const noteText = noteInput.value.trim();
        if (noteText === '') return;

        const li = document.createElement('li');
        li.textContent = noteText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-note-btn');
        deleteBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to delete this note?')) {
                li.remove();
            }
        });

        li.appendChild(deleteBtn);
        noteList.appendChild(li);

        noteInput.value = '';
    }

    function handleJoinNowClick() {
        joinProgressPopup.style.display = 'block';
        notificationPopup.style.display = 'none'; // Ensure notification popup is closed
    }

    addNoteBtn.addEventListener('click', () => {
        addNote();
        // Ensure join progress popup is closed when a new note is added
        joinProgressPopup.style.display = 'none';
    });

    noteInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addNote();
        }
    });

    // Add event listeners to both join buttons
    joinNowBtn.addEventListener('click', handleJoinNowClick);
    joinNowBtnImage.addEventListener('click', handleJoinNowClick);

    submitJoinBtn.addEventListener('click', () => {
        // Handle submission logic here
        joinProgressPopup.style.display = 'none';
    });

    cancelJoinBtn.addEventListener('click', () => {
        joinProgressPopup.style.display = 'none';
    });

    // Toggle Notification Popup
    notificationIcon.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click event from bubbling up to document
        notificationPopup.style.display = notificationPopup.style.display === 'block' ? 'none' : 'block';
        // Ensure join progress popup is closed when notification popup is opened
        joinProgressPopup.style.display = 'none';
    });

    // Close popups if clicking outside
    document.addEventListener('click', (event) => {
        if (!notificationIcon.contains(event.target) && !notificationPopup.contains(event.target)) {
            notificationPopup.style.display = 'none';
        }
        if (!joinNowBtn.contains(event.target) && !joinProgressPopup.contains(event.target) &&
            !joinNowBtnImage.contains(event.target)) {
            joinProgressPopup.style.display = 'none';
        }
    });

    updateDateTime();
    setInterval(updateDateTime, 1000);
});
