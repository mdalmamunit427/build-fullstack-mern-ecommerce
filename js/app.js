// accordian section
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const faqsData = [
      {
        question: "Who should take this course?",
        answer: "This course is appropriate for writers of all levels and backgrounds. Whatever your previous experience and whatever genre you are writing in, it can help you finish your novel."
      },
      {
        question: "How does the course work?",
        answer: "The course gives you time to learn and time to write. Each week, you’ll access six video lessons and one live webinar. How you choose to structure your writing time is up to you. Throughout, you can turn to our vibrant online community to discuss your work and find support."
      },
      {
        question: "What does the course cover?",
        answer: "In short, everything you need to know to write a novel. The themed weeks focus in-depth on the following topics: Preparation, Beginnings, Secret Sauce, Character, Plot Skills, Description, Dialogue, Texture, Middles, Writing Skills, Writing Techniques, Chapters, Doubling Up, Endings, and Next Steps."
      },
      {
        question: "How long is the course?",
        answer: "The course lasts for 101 days — that’s fourteen and a half weeks. Upon enrolling, you’ll also access five preparation sessions that will help you get ready to write."
      },
      {
        question: "What do the lessons look like?",
        answer: "Each weekday, you’ll get access to a new video lesson on a specific writing topic, along with optional reading and exercises. On Saturdays, you'll get further videos with our panel of guest writers; some reinforce the week’s writing theme, while others cover the challenges of writing more generally."
      },
      // Add more FAQ items here
    ];
  
    const faqsContainer = document.getElementById('faqs');
  
    faqsData.forEach((faq, index) => {
      const faqElement = document.createElement('div');
      faqElement.classList.add('faq');
      
      faqElement.innerHTML = `
        <div class="faq-title" data-collapsible-trigger="faq-${index}">
          <div class="icon">${index === 0 ? '▼' : '▶'}</div>
          <h4>${faq.question}</h4>
        </div>
        <div class="faq-content">
          <p>${faq.answer}</p>
        </div>
      `;
  
      faqsContainer.appendChild(faqElement);
    });
  
    faqsContainer.addEventListener('click', (event) => {
      const titleElement = event.target.closest('.faq-title');
      if (titleElement) {
        const faqElement = titleElement.parentElement;
        const isFirstFaq = faqElement === document.querySelector('.faq:first-of-type');
  
        if (isFirstFaq) {
          // Toggle the first FAQ without closing it
          faqElement.classList.toggle('open');
          return;
        }
        
        // Toggle the clicked FAQ
        faqElement.classList.toggle('open');
  
        // Close other FAQs
        document.querySelectorAll('.faq').forEach(el => {
          if (el !== faqElement) {
            el.classList.remove('open');
          }
        });
  
        // Update icons
        document.querySelectorAll('.icon').forEach((icon, index) => {
          icon.textContent = (index === 0 && faqElement.classList.contains('open')) ? '▼' : '▶';
        });
      }
    });
  
    // Open the first FAQ by default
    const firstFaq = document.querySelector('.faq');
    if (firstFaq) {
      firstFaq.classList.add('open');
    }
  });
  
  
  