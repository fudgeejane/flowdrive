document.addEventListener('DOMContentLoaded', () => {
    const joinProgressPopup = document.getElementById('join-progress-popup');
    const submitJoinBtn = document.getElementById('submit-join');
    const cancelJoinBtn = document.getElementById('cancel-join');
    const joinNowBtn = document.getElementById('join-now-btn');
    const notificationIcon = document.getElementById('notification-icon');
    const notificationPopup = document.getElementById('notification-popup');

    // Toggle Join Progress Popup
    if (joinNowBtn) {
        joinNowBtn.addEventListener('click', () => {
            joinProgressPopup.style.display = joinProgressPopup.style.display === 'block' ? 'none' : 'block';
            // Ensure notification popup is closed when join progress is opened
            notificationPopup.style.display = 'none';
        });
    }

    // Handle Join Progress Popup submission
    if (submitJoinBtn) {
        submitJoinBtn.addEventListener('click', () => {
            // Handle submission logic here (e.g., validate input, send data)
            joinProgressPopup.style.display = 'none';
        });
    }

    // Hide Join Progress Popup
    if (cancelJoinBtn) {
        cancelJoinBtn.addEventListener('click', () => {
            joinProgressPopup.style.display = 'none';
        });
    }

    // Toggle Notification Popup
    if (notificationIcon) {
        notificationIcon.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent click event from bubbling up to document
            notificationPopup.style.display = notificationPopup.style.display === 'block' ? 'none' : 'block';
            // Ensure join progress popup is closed when notification popup is opened
            joinProgressPopup.style.display = 'none';
        });
    }

    // Close popups if clicking outside
    document.addEventListener('click', (event) => {
        if (notificationPopup && !notificationIcon.contains(event.target) && !notificationPopup.contains(event.target)) {
            notificationPopup.style.display = 'none';
        }
        if (joinProgressPopup && !joinNowBtn.contains(event.target) && !joinProgressPopup.contains(event.target)) {
            joinProgressPopup.style.display = 'none';
        }
    });
});
