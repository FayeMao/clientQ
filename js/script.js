document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');

    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-group-header');
        if (!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        // Toggle icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        // Toggle visibility of body
        groupBody.classList.toggle('open');

        // Close other open FAQ bodies
        const otherGroups = faqContainer.querySelectorAll('.faq-group');
        console.log(otherGroups);

        otherGroups.forEach((otherGroups) => {
            if (otherGroups !== group) {
                const otherGroupBody = otherGroups.querySelector('.faq-group-body');
                const otherIcon = otherGroups.querySelector('.faq-group-body i');

                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus')
            }
        });
    });
});
