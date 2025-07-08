import React from 'react';

const TriggerWebhook = () => {
  const handleTrigger = async () => {
    try {
      const response = await fetch('https://soft-torte-4e0399.netlify.app/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer gdc-webhook-2025-secret',
        },
        body: JSON.stringify({
          event: 'manual-trigger',
          message: 'This is a test webhook trigger from React.',
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        alert('Webhook triggered successfully!');
      } else {
        alert(`Failed to trigger webhook. Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error triggering webhook:', error);
      alert('An error occurred while triggering the webhook.');
    }
  };

  return (
    <div>
      <h2>Trigger Webhook</h2>
      <button onClick={handleTrigger}>Send Webhook</button>
    </div>
  );
};

export default TriggerWebhook;
