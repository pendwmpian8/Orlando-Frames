# Orlando Frames – Custom Framing Website

![screenshot of homepage and CTA button](assets/readme-imgs/home-sc.png)

Welcome to Orlando Frames, a custom art framing website created for a small, independent business based in Leyton, East London. This project was designed to showcase the company’s services, answer common questions, and allow visitors to request personalized framing quotes through a clean, accessible, and responsive interface.

## Project Overview

Orlando Frames is a multi-page responsive website built using HTML5, CSS3, and Bootstrap 5. The site prioritizes usability, visual clarity, and a strong sense of community. With a warm, approachable color palette and contemporary typography, the design reflects the tone and values of a bespoke local business.

The design decisions were shaped closely by the client's brief, which emphasized:
- A **non-commercial, personal tone** to communicate craftsmanship over mass production
- Avoiding features like a gallery or e-commerce components to retain a **bespoke, word-of-mouth feel**
- Use of specific **warm color tones** and **distinctive typefaces** (Syne and Urbanist) to evoke a modern yet welcoming aesthetic
![example showcasing client's color palette](assets/readme-imgs/how-it-works-sc.png)

This direction informed the visual language of the site: clean, uncluttered, and centered around trust and approachability rather than promotion or sales.

## Pages Included

- `index.html` – Home page introducing the brand with a clear call to action
![index page further down](assets/readme-imgs/home-sc-box.png)
- `about.html` – About page detailing the company story and values
![about us page email sign up section](assets/readme-imgs/email-signup.png)
- `quote.html` – Quote request form with field validation and structured layout
![form enquiry submission page](assets/readme-imgs/get-a-quote.png)
- `faqs.html` – Frequently Asked Questions page to assist customers
![faq page](assets/readme-imgs/faq-sc.png)
- `success.html` – Confirmation page displayed after successful form submission
![success page](assets/readme-imgs/success.png)

## Technologies Used

- HTML5 – Semantic markup for accessibility and SEO
- CSS3 – Custom styling and responsive layout
- Bootstrap 5 – Grid system, responsive design utilities, forms, and components
- Google Fonts – Syne and Urbanist for strong, modern typography
- CSS Variables – For consistent theming and style management

## Implementation Notes

- Semantic HTML used throughout for screen readers and search engines
- All pages include custom meta descriptions tailored for local search relevance
- Bootstrap’s grid and spacing utilities were combined with custom CSS for layout control
- Quote form uses side-by-side input fields via Bootstrap’s `.row` and `.col` structure
- Custom buttons styled with padding, font scaling, and hover effects
- Responsive behavior refined through media queries
![example of mobile responsiveness on homepage](assets/readme-imgs/drop-in-mobile.png)
- Typography and color controlled via CSS custom properties for consistency
- Focus on clean alignment, spacing, and visual rhythm across all devices
- The client emphasized a **non-commercial feel**, which led to the decision to exclude a gallery page. This decision helps preserve the **personal, bespoke nature** of the business, ensuring that the site is **not product-driven** but service-focused, with a strong emphasis on personal interaction.
- The **warm color scheme** and use of **Syne and Urbanist fonts** were chosen specifically to evoke a welcoming, modern, and approachable atmosphere, aligning with the client’s vision of creating a **handcrafted, local brand**.

## SEO Optimization

Unique meta descriptions were written for every page, highlighting the business's local focus and framing expertise. These descriptions aim to improve organic search visibility for keywords such as “custom framing in Leyton” and “bespoke picture frames East London.”

## Testing

### Manual Testing

- All internal navigation links work correctly across all screen sizes and devices
- Quote form prevents submission if required fields are left empty (native HTML5 validation)
- Responsive layout tested on mobile (320px), tablet (768px), and desktop (1440px+) devices
- Typography, spacing, and layout render consistently across Chrome, Firefox, Safari, and Edge
- All interactive elements (buttons, inputs) are keyboard accessible
- All images have appropriate `alt` text

### Validation

- **HTML Validation**: All pages validated through the [W3C Markup Validation Service](https://validator.w3.org/). No critical errors found. Minor warnings are intentional due to form structure without server-side submission.
- **CSS Validation**: Stylesheets passed validation via [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/), including use of valid CSS custom properties.
- **Lighthouse Testing**: Conducted in Chrome DevTools on desktop.
- (on average)
  - Performance: 73-98
  - Accessibility: 95
  - Best Practices: 100
  - SEO: 100
  ![lighthouse screenshot](assets/readme-imgs/lighthouse-sc.png)
  These scores reflect a well-optimized and accessible site. Performance may vary slightly across networks or browsers.

## Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/orlando-frames.git

## License

This project is intended for educational and personal portfolio use only. Not licensed for commercial redistribution.
