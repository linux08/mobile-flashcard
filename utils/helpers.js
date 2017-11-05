import { Notifications, Permissions } from 'expo'
import { AsyncStorage } from 'react-native'

const key = 'Flashcard:Lin'

function createNotification() {
    return {
        title: 'Take A quiz!',
        body: "👋 don't forget to take a quiz today!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}



export function setLocalNotification() {
    AsyncStorage.getItem(key)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()
                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(20)
                            tomorrow.setMinutes(0)
                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(), { time: tomorrow, repeat: 'day' }
                            )
                            AsyncStorage.setItem(key, JSON.stringify(true))
                        }
                    })
            }
        })
        .catch((error) => {
            console.log("Error With Notifications - ", error);
        })
}