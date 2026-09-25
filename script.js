document.addEventListener("DOMContentLoaded", () => {
    // Scroll reveal animation
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });

    // Navbar background on scroll
    const nav = document.querySelector("nav");

    // Mobile hamburger navigation
    const menuToggle = document.querySelector(".menu-toggle");

    if (nav && menuToggle) {
        menuToggle.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("menu-open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
            menuToggle.textContent = isOpen ? "✕" : "☰";
        });

        nav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                nav.classList.remove("menu-open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open navigation menu");
                menuToggle.textContent = "☰";
            });
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 950) {
                nav.classList.remove("menu-open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open navigation menu");
                menuToggle.textContent = "☰";
            }
        });
    }

    if (nav) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 60) {
                nav.style.background = "#0d0d0d";
            } else {
                nav.style.background = "rgba(0,0,0,.55)";
            }
        });
    }

    // Crew request form
    const crewRequestForm = document.getElementById("crewRequestForm");

    if (crewRequestForm) {
        crewRequestForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const companyName =
                document.getElementById("companyName")?.value.trim() || "";

            const contactName =
                document.getElementById("contactName")?.value.trim() || "";

            const phone =
                document.getElementById("phone")?.value.trim() || "";

            const email =
                document.getElementById("email")?.value.trim() || "";

            const jobAddress =
                document.getElementById("jobAddress")?.value.trim() || "";

            const serviceType =
                document.getElementById("serviceType")?.value || "";

            const workerCount =
                document.getElementById("workerCount")?.value || "";

            const startDate =
                document.getElementById("startDate")?.value || "";

            const duration =
                document.getElementById("duration")?.value || "Not provided";

            const startTime =
                document.getElementById("startTime")?.value || "Not provided";

            const budget =
                document.getElementById("budget")?.value.trim() || "Not provided";

            const projectDetails =
                document.getElementById("projectDetails")?.value.trim() || "";

            const subject = encodeURIComponent(
                `Crew Request from ${companyName || contactName}`
            );

            const body = encodeURIComponent(
`T2K WORKFORCE SOLUTIONS - CREW REQUEST

Company Name: ${companyName}
Contact Name: ${contactName}
Phone: ${phone}
Email: ${email}

Jobsite Address: ${jobAddress}
Service Needed: ${serviceType}
Number of Workers Needed: ${workerCount}
Preferred Start Date: ${startDate}
Preferred Start Time: ${startTime}
Expected Project Duration: ${duration}
Estimated Budget: ${budget}

Project Details:
${projectDetails}`
            );

            window.location.href =
                `mailto:t2kworkforcesolutions@gmail.com?subject=${subject}&body=${body}`;
        });
    }

    // Make homepage service cards clickable
    document.querySelectorAll(".service-card").forEach((card) => {
        card.setAttribute("role", "link");
        card.setAttribute("tabindex", "0");
        card.addEventListener("click", () => {
            window.location.href = "services.html";
        });
        card.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                window.location.href = "services.html";
            }
        });
    });
});
const workerApplicationForm = document.getElementById("workerApplicationForm");

if(workerApplicationForm){

    workerApplicationForm.addEventListener("submit", function(event){

        event.preventDefault();

        const fullName =
            document.getElementById("fullName")?.value.trim() || "";

        const dob =
            document.getElementById("dob")?.value || "";

        const workerPhone =
            document.getElementById("workerPhone")?.value.trim() || "";

        const workerEmail =
            document.getElementById("workerEmail")?.value.trim() || "";

        const city =
            document.getElementById("city")?.value.trim() || "";

        const state =
            document.getElementById("state")?.value.trim() || "";

        const authorized =
            document.getElementById("authorized")?.value || "";

        const driversLicense =
            document.getElementById("driversLicense")?.value || "";

        const transportation =
            document.getElementById("transportation")?.value || "";

        const experienceYears =
            document.getElementById("experienceYears")?.value || "";

        const tradeExperience =
            document.getElementById("tradeExperience")?.value || "";

        const skills =
            document.getElementById("skills")?.value.trim() || "Not provided";

        const osha =
            document.getElementById("osha")?.value || "None";

        const otherCerts =
            document.getElementById("otherCerts")?.value.trim() || "None";

        const availability =
            document.getElementById("availability")?.value || "";

        const availableDate =
            document.getElementById("availableDate")?.value || "";

        const travelDistance =
            document.getElementById("travelDistance")?.value || "";

        const desiredPay =
            document.getElementById("desiredPay")?.value || "";

        const drugScreen =
            document.getElementById("drugScreen")?.value || "";

        const backgroundCheck =
            document.getElementById("backgroundCheck")?.value || "";

        const crewLead =
            document.getElementById("crewLead")?.value || "";

        const leadershipDetails =
            document.getElementById("leadershipDetails")?.value.trim() || "Not provided";

        const emergencyName =
            document.getElementById("emergencyName")?.value.trim() || "";

        const emergencyPhone =
            document.getElementById("emergencyPhone")?.value.trim() || "";

        const subject = encodeURIComponent(
            `T2K Workforce Application - ${fullName}`
        );

        const body = encodeURIComponent(
`T2K WORKFORCE SOLUTIONS - WORKFORCE APPLICATION

APPLICANT INFORMATION

Full Legal Name: ${fullName}
Date of Birth: ${dob}
Phone: ${workerPhone}
Email: ${workerEmail}
City: ${city}
State: ${state}

WORK ELIGIBILITY & TRANSPORTATION

Authorized to Work in U.S.: ${authorized}
Valid Driver's License: ${driversLicense}
Reliable Transportation: ${transportation}

EXPERIENCE

Years of Experience: ${experienceYears}
Primary Trade / Experience: ${tradeExperience}

Skills & Additional Experience:
${skills}

CERTIFICATIONS

OSHA: ${osha}
Other Certifications: ${otherCerts}

AVAILABILITY & PAY

Availability: ${availability}
Available Start Date: ${availableDate}
Maximum Travel Distance: ${travelDistance}
Desired Pay: ${desiredPay}

SCREENING

Drug Screening: ${drugScreen}
Background Check: ${backgroundCheck}

LEADERSHIP

Crew Lead / Supervisor Experience: ${crewLead}

Leadership Details:
${leadershipDetails}

EMERGENCY CONTACT

Name: ${emergencyName}
Phone: ${emergencyPhone}

Applicant certification was acknowledged before submission.`
        );

        window.location.href =
            `mailto:t2kworkforcesolutions@gmail.com?subject=${subject}&body=${body}`;

    });

}