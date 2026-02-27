# Project: Registration Wizard – Multi-Step Onboarding Form

This document records how AI tools were used during the development of the Registration Wizard project.

## Project Understanding & Planning

**Prompt style used:**
> Explain how to build a multi-step registration wizard using controlled components and React state management.

**Purpose:**
- Understand how multi-step forms work in real applications
- Break the project into Level 1 (core logic), Level 2 (validation & UX)
- Plan the correct implementation order (Structure → State → Validation → UX)
- Focus on architecture before writing code

## Component Architecture & State Management

**Prompt style used:**
> How should state be structured in a multi-step form so that data is not lost when navigating between steps?

**Purpose:**
- Learn about lifting state up to the parent component
- Store all form data in a single centralized object
- Understand controlled components in React
- Design clean prop-based communication between parent and child components

## Conditional Rendering & Navigation Logic (Level 1)

**Prompt style used:**
> How should conditional rendering be implemented for step-based forms in React?

**Purpose:**
- Control step switching using a `currentStep` state
- Implement `nextStep` and `prevStep` functions
- Ensure smooth navigation between steps
- Maintain data persistence while navigating back

## Review Screen & Submission Logic

**Prompt style used:**
> How should a review page be structured in a multi-step form before final submission?

**Purpose:**
- Display collected form data clearly
- Confirm correctness before submission
- Log final structured object in console
- Show a success screen after submission

## Real-Time Validation Logic (Level 2)

**Prompt style used:**
> Explain how real-time validation should work in a controlled multi-step form.

**Purpose:**
- Implement required field validation
- Validate email format logically
- Enforce password length requirement
- Match confirm password with password
- Update errors dynamically while typing
- Avoid waiting until submit to show errors

## Disabled Navigation & UX Decisions

**Prompt style used:**
> How can the Next button be disabled until the current step is valid?

**Purpose:**
- Prevent users from progressing with invalid data
- Create an `isValid` logic per step
- Improve UX by guiding user behavior
- Mimic professional SaaS onboarding flows

## Password Visibility Toggle (UX Improvement)

**Prompt style used:**
> How can a password visibility toggle be implemented using an eye icon in React?

**Purpose:**
- Improve user experience
- Learn conditional input type switching (text vs password)
- Use React Icons library properly
- Position icons correctly using Tailwind CSS

## Progress Bar Implementation

**Prompt style used:**
> How should a dynamic progress bar be implemented in a multi-step form?

**Purpose:**
- Calculate progress percentage dynamically
- Display "Step X of Y" indicator
- Improve onboarding experience
- Add smooth transition effects using Tailwind

## Tailwind CSS UI Structuring

**Prompt style used:**
> How can a professional SaaS-style form layout be built using Tailwind CSS?

**Purpose:**
- Design a centered card layout
- Use consistent spacing and typography
- Style disabled buttons properly
- Add hover states and focus rings
- Maintain clean and responsive UI

## Debugging & Error Handling

**Prompt style used:**
> My validation logic is not updating correctly when switching steps. What could be wrong?

**Purpose:**
- Debug state update timing issues
- Understand how React re-renders work
- Fix conditional validation logic
- Avoid overwriting previous error states

## Deployment & Production Considerations

**Prompt style used:**
> What should be checked before deploying a React form project to production?

**Purpose:**
- Test all validation edge cases
- Confirm no data loss between steps
- Verify disabled button logic
- Ensure clean UI on all screen sizes
- Prepare for Vercel deployment

## Documentation & Professional Practices

**Prompt style used:**
> How should a multi-step form internship project be documented professionally?

**Purpose:**
- Write clear README documentation
- Explain Level 1 and Level 2 features properly
- Maintain transparency about AI usage
- Follow internship submission standards

## 🧠 Overall Reflection

Using AI as a structured learning assistant helped me:
- Understand controlled components deeply
- Learn proper state architecture for multi-step forms
- Implement real-time validation confidently
- Improve UI/UX decisions logically
- Build the project progressively from Level 1 to Level 2
- Think in terms of scalable frontend architecture

## ✅ Final Note

AI tools were used to understand concepts, debug issues, and refine implementation strategy.

All code was manually written, tested, and adjusted to ensure genuine understanding and professional development.
