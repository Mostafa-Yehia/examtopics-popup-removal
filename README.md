# ExamTopics Popup Removal (Chrome Extension)

## Overview

While preparing for cloud certification exams using [examtopics.com](https://www.examtopics.com), a dynamically injected popup disrupts reading and navigation.

This small Chrome extension automates the removal of that popup using a lightweight, event-driven script, with a focus on:

- **Automation over manual interaction**
- **Minimal resource utilization**
- **Simplicity**

No continuous polling, no background services, and no unnecessary permissions.

---

## Problem

![popup example](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0ld3ork033mk6dva0p2r.png)

- Popup is injected after page load
- Manual dismissal is repetitive and not possible without manipulaing DOM content
- Traditional page-load scripts are unreliable
- Continuous loops waste CPU resources

---

## Solution

- Runs a single content script on `examtopics.com`
- Detects when the popup appears in the DOM
- Hides it immediately
- Stops execution right after (no idle CPU usage)

This approach reflects **efficient scripting and event-driven automation**, not application development.

---

## Key Characteristics

- ✔️ Event-driven (no polling loops)  
- ✔️ Executes once per page load  
- ✔️ Very low CPU and memory footprint  
- ✔️ No background processes  
- ✔️ No external dependencies  

---

## Setup (Chrome / Chromium)

1. Clone or download this repository  
2. Open Chrome and go to:  
`chrome://extensions`
3. Enable **Developer mode**  
4. Click **Load unpacked**  
5. Select the project directory  
6. Open: [https://www.examtopics.com](https://www.examtopics.com/discussions/google/view/7083-exam-professional-cloud-architect-topic-1-question-1/)

The popup will be hidden automatically.

---

## Why This Exists

This project is a **simple automation exercise** created during exam preparation to:

- Reduce friction  
- Apply event-driven scripting  
- Avoid wasteful resource usage  

It’s intentionally small and pragmatic — aligned with a **Cloud / DevOps mindset** rather than front-end development.

---

## Disclaimer

For personal study convenience only.  
Does not alter site content or bypass restrictions.
