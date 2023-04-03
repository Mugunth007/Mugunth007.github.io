
import portfolio from "../assets/portfoliom.png";
import bank from "../assets/bank.jpeg";
import toxic from "../assets/toxic.png";
import chat from "../assets/chat.jpeg";
import nasa from "../assets/nasa.png";
import ecommerce from "../assets/ecommerce.png";

export const projectData = [
  {
    id: 1,
    image: ecommerce,
    summary: "Ecommerce Web-app made using React.",
    overlay: "Ecommerce- Webapplication",
    title: "Ecommerce Web-app",
    features: [
      "An e-commerce web application to buy products online. Key features are:",
      "1. Filter feature based on rating, price, and product categories.",
      "2. Add to Cart feature.",
      "3. Order Tracking feature.",
      "4. Payment feature to buy products.",
      " 5. Admin Dashboard feature to do CRUD operations on User, Products, and Orders by the Admin",
    ],
    techStack: ["React", "api","Redux"],
    links: [
      "https://github.com/Mugunth007/ecommerce-site-react",
      "https://ecommerce-site-react.vercel.app/"
    ],
  },
  {
    id: 2,
    image: portfolio,
    summary: "Portfolio Web-app made using React & Tailwind CSS.",
    overlay: "Portfolio- Webapplication",
    title: "Portfolio Web-app",
    features: ["My Portfolio web application is based on GOOGLE theme."],
    techStack: ["React", "Tailwind CSS"],
    links: [
      "",
      "https://github.com/Mugunth007/Mugunth007.github.io"
    ],
  },

  {
    id: 3,
    image: chat,
    summary: "chat application made using React & Firebase.",
    overlay: "chat application",
    title: "Chat web application",
    features: ["It will create a group like platform example whatsapp and discord"],
    techStack: ["React", "api"],
    links: [
      "https://chat-app-react-alpha.vercel.app/",
      "https://github.com/Mugunth007/chat_app-react"
    ],
  },

  {
    id: 4,
    image: bank,
    summary: "Bank note prediction using machine learning .",
    overlay: "BankNote Authentication",
    title: "Bank Note Authentication",
    features: ["We are using the machine learning to predict the bank note authentication."],
    techStack: [
      "machine learning",
      "data preprocessing",
      "features extration"
    ],
    links: [
      "",
      "https://github.com/Mugunth007/Bank_Note_authentication"
    ],
  },
  {
    id: 5,
    image: toxic,
    summary: "Toxic commands classifcation using LSTM RNN and also having the web app.",
    overlay: "Toxic-commands Classification",
    title: "Toxic Commands Classification",
    techStack: ["machine learning",'deep learning',"gradio"],
    features: ["We are using the deep learning algorithm LSTM RNN to predict the toxic commands."],
    links: [
      "",
     "https://github.com/Mugunth007/toxicity-commands-classification"
    ],
  },
  {
    id: 6,
    image: nasa,
    summary: "Nasa Astronomy Picture of the day app with the help of NASA APOD api",
    overlay: "Nasa APOD",
    title: "blackhole",
    features: ["we are created the frontend on react and get the api from nasa to display the apod images"],
    techStack: ["React", "HTML", "CSS", "Javascript",'api'],
    links: [
      "",
      'https://github.com/Mugunth007/blackhole-react-apod-nasa'
    ],
  },
];
