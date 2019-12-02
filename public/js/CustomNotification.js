function displayNotification(messg) {
    if (Notification.permission == 'granted') {
        navigator.serviceWorker.getRegistration().then(function(reg) {
            reg.showNotification(messg);
            });
        }
	}
function getMessage(){
	return {
		message: "Get Your Train Tickets Ready"
	}
}
