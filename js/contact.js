const form = document.getElementById('contactForm');
if (form && window.fetch && window.FormData && window.URLSearchParams) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const button = document.getElementById('submitButton');
    const status = document.getElementById('form-status');
    button.disabled = true;
    form.setAttribute('aria-busy', 'true');
    status.hidden = false;
    status.textContent = 'Sending your request…';
    try {
      const response = await fetch('./', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString(),
      });
      if (!response.ok) throw new Error('Request failed');
      window.location.assign(form.action);
    } catch {
      status.textContent = 'Your request could not be sent. Your information is still here. Please try again, call 352-234-6030, or email dynahear@gmail.com.';
      button.disabled = false;
      form.removeAttribute('aria-busy');
    }
  });
}
