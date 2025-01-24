export function apiUtilNotifications(): string {
  return 'api-util-notifications';
}

export function sendNotification(clientId: string) {
  console.log('sending notification to client: ', clientId);
}
