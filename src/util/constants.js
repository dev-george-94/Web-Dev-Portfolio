
import {logos} from "../assets"
import {images} from "../assets"


//react-icons Icons
import {BsEnvelopeFill} from "react-icons/bs"
import { HiMenu,HiX,HiOutlineMail} from "react-icons/hi"
import {CgProfile} from "react-icons/cg"
import {GrLanguage} from "react-icons/gr"
import {IoMdHome} from "react-icons/io"

export const mappedIcons = {

    // Pages
    home:       { name:"Home",       logo:<IoMdHome/> },
    about:      { name:"About",      logo:<CgProfile/> },
    projects:   { name:"Projects",   logo:<GrLanguage/> },
    contact:    { name:"Contact",    logo:<BsEnvelopeFill/> },

    // Technologies
    react:      { name:"React",      logo:logos.reactLogo      },
    javascript: { name:"Javascript", logo:logos.javascriptLogo },
    html5:      { name:"Html",       logo:logos.html5Logo      },
    css:        { name:"Css",        logo:logos.css3Logo       },
    scss:       { name:"Scss",       logo:logos.scssLogo       },
    vscode:     { name:"Vscode",     logo:logos.vscodeLogo     },
    git:        { name:"Git",        logo:logos.gitLogo        },
    github:     { name:"Github",     logo:logos.githubLogo     },
    mysql:      { name:"Mysql",      logo:logos.mysqlLogo      },
}

export const projectList = [
    {
        title:"Project1",
        thumbnail:images.imagePlaceholder,
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur eveniet ipsam commodi corrupti sit deleniti Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
        skillsApplied:["react","javascript","html5","css","scss"],
        link:{
            live:"https://www.google.com",
            code:"https://www.google.com"
        }
    },

    {
        title:"Project2",
        thumbnail:images.imagePlaceholder,
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur eveniet ipsam commodi corrupti sit deleniti Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur eveniet ipsam commodi corrupti sit deleniti",
        skillsApplied:["react","javascript","html5","css","scss"],
        link:{
            live:"https://www.google.com",
            code:"https://www.google.com"
        }
    },

    {
        title:"Project3",
        thumbnail:images.imagePlaceholder,
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur eveniet ipsam commodi corrupti sit deleniti Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur eveniet ipsam commodi corrupti sit deleniti",
        skillsApplied:["react","javascript","html5","css","scss"],
        link:{
            live:"https://www.google.com",
            code:"https://www.google.com"
        }
    },

    {
        title:"Project4",
        thumbnail:images.imagePlaceholder,
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur eveniet ipsam commodi corrupti sit deleniti Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur eveniet ipsam commodi corrupti sit deleniti",
        skillsApplied:["react","javascript","html5","css","scss"],
        link:{
            live:"https://www.google.com",
            code:"https://www.google.com"
        }
    },
   
  
]

