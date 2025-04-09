document.addEventListener('DOMContentLoaded', function() {
    function setAmount(amount) {
      document.getElementById('customAmount').value = amount;
    }
    
    // Make setAmount available globally
    window.setAmount = setAmount;
    
    const donationForm = document.getElementById('donationForm');
    if (donationForm) {
      donationForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        // Disable the submit button to prevent multiple submissions
        const submitButton = document.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.innerHTML = 'Processing...';
        
        try {
          // Get form data
          const formData = new FormData(this);
          const donationData = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            amount: Number(formData.get('amount')),
            // disasterId: formData.get('disasterId')
          };
          
          // Validate amount
          if (isNaN(donationData.amount) || donationData.amount <= 0) {
            alert('Please enter a valid donation amount.');
            submitButton.disabled = false;
            submitButton.innerHTML = 'Donate Now';
            return;
          }
          
          // Create checkout session
          const response = await fetch('/create-checkout-session', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(donationData),
          });
          
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          
          const session = await response.json();
          
          // Redirect to Stripe Checkout
          window.location.href = session.url;
          
        } catch (error) {
          console.error('Error:', error);
          alert('There was a problem processing your donation. Please try again.');
          submitButton.disabled = false;
          submitButton.innerHTML = 'Donate Now';
        }
      });
    }
  });