---
pageClass: home-page
# some data for the components

name: Che Chen
profile: /Che_new.JPG

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/chechen0904
  - title: linkedin
    icon: "/icons/linkedin-mono.svg"
    link: https://www.linkedin.com/in/che-chen-62bb4b124/

bio: Incoming PhD student at IESE Business School
email: chen_che@student.ceu.edu
---

<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

I am currently a second year MA Econ student at Central European University. Before that, I have studied at Nanyang Technological University and Ocean University of China. I expect to graduate from CEU in June 2022 and will start my Ph.D. study at IESE Business School in September this year. 


## Research Interests

- Corporate Finance
- Mergers & Acquisitions
- Applied Machine Learning
- Applied Natural Language Processing


## Education & Experiences

- **IESE Business School, University of Navarra** <br/>
2022 - 2027
PhD in Finance (MRM + PhD)
Barcelona, Spain

- **Central European University** <br/>
2020 - 2022
MA in Economics
Vienna, Austria

- **Nanyang Technological University** <br/>
2017 - 2019
MSc in Managerial Economics
Singapore, Singapore

- **Ocean University of China** <br/>
2013 - 2017
BA in Accounting
Qingdao, China

## Awards

- **IESE Full Scholarship** <br/>
2022 - 2027

- **CEU Master Fellowship** <br/>
2020 - 2022

## Research


[→ Full list](/research/)

<ProjectCard hideBorder=true>

  **Religion and Covid-19**

  Jun. 2021 – Sept. 2021

  Research Assistant

  Supervisor: Dr. Girish Bahal

</ProjectCard>

<ProjectCard hideBorder=true>

  **The effect of private tutoring on academic performance of junior high school students**

  Apr. 2021 - Jun. 2021

  Term paper
  
  Course Instructor: Dr. Sergey Lychagin

</ProjectCard>

<ProjectCard hideBorder=true>

  **Development of Folk Custom Tourism: A Study on Qingdao Han Folk Village**

  Jun. 2014 – Jun. 2015

  Core Member
  
  OUC Student Research and Development Program

</ProjectCard>


<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>
