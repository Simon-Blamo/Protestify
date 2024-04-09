# Protestify

Protestify is a full-stack web application developed using Ruby on Rails. It provides a platform for users to organize and promote rallies, engage with other activists, and participate in community events.

## Features

- **User Authentication**: Users can sign up, log in, and manage their accounts securely.
- **Rally Promotion**: Users can create and promote rallies on the platform, providing details such as date, time, location, and cause.
- **Rally Attendance**: Activists can mark their attendance for specific rallies, helping organizers gauge interest and participation.
- **Messaging (Future Implementation)**: Planned feature to facilitate communication between users, enabling better coordination and collaboration for rallies and events.

## Technologies Used

- **Ruby on Rails**: MVC framework for building the backend and handling server-side logic.
- **HTML/CSS**: Frontend markup and styling.
- **TypeScript**: Client-side scripting for interactivity.
- **Bootstrap**: Frontend framework for responsive design and UI components.
- **PostgreSQL**: Databases for storing user data, rally information, and attendance records.

## Prerequisites
- Linux Distribution (Ubuntu, Kali, Arch)
- Ruby (3.2.2)
- Gem (3.4.10)
- Ruby on Rails (7.1.3.2)
- NPM (10.4.0)
- Angular(15.2)

## Getting Started
1. Clone the repository:
   
   `git clone https://github.com/TCNJ-SE/protestify-24-SB.git`

2. Navigate to the Protestify Directory:

   `cd protestify-24-SB`
3. Install Dependencies:
  * For frontend (from protestify-24-SB Directory)
    * `cd src/frontend`
    * `npm install`
  
  * For backend (from protestify-24-SB Directory)
      * `cd src/backend`
      * `bundle install`
4. Run application:
  * From frontend directory (protestify-24-SB/src/frontend)
    * Run command: `npm start`

## Diagrams

### Use Case Diagram
![Use Case Diagram](/docs/SB-files/Use%20Case%20Diagram.png)
### System State Diagram
![Create Profile](/docs/SB-files/SSD1.png)
![Suggest Rally](/docs/SB-files/SSD2.png)
![Approve/Deny Rally](/docs/SB-files/SSD3.png)
### State Chart
![Approve/Deny Rally](/docs/SB-files/State%20Chart.png)

## Use Cases
* [Use Case Descriptions](docs/SB-files/Use%20Case%20Description.pdf)
