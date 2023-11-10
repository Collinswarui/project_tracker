 import image from '../images/image.png'
 import image2 from '../images/img2.png'
 
 export const Landing = () => {
    return (
      <div className="landing">
        <h1>Welcome to Project Tracker</h1>
        <div className='image-wrapper'>
           <p>Effortlessly oversee and control your projects through our intuitive project tracking system. Whether you find yourself immersed in personal endeavors, engaged in collaborative team efforts, or overseeing the operations of your business, our tool is designed to enhance your organizational capabilities and keep you well-informed about your project's advancement. With user-friendly features and robust functionalities, our project tracking system empowers you to efficiently manage tasks, monitor milestones, and achieve success in your endeavors.</p>

           <img src={image} alt=''/>
        </div>
       

        <h2>Key Features:</h2>
        <ul>
          <li>Project Creation: Easily create new projects and define project details.</li>
          <li>Task Management: Break down your projects into tasks and set deadlines.</li>
          <li>Progress Tracking: Monitor the progress of your projects and tasks.</li>
          <li>Collaboration: Collaborate with team members and assign tasks.</li>
          <li>Deadline Reminders: Get timely reminders for upcoming deadlines.</li>
        </ul>
  
        <h2>Get Started:</h2>
        <div className='wrapper-img'>
          <img src={image2} alt=''/>
          <p>Ready to take control of your projects? Sign up or log in to get started with Project Tracker. With our user-friendly interface, you can start managing your projects more efficiently today.</p>
        </div>

  
        <div className="cta-buttons">
          <button>Sign Up</button>
          <button>Log In</button>
        </div>
      </div>
    );
  }