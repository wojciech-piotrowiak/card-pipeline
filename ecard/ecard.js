if (Meteor.isClient) {
  Template.projects.helpers({
    professionalProjects: [
      {projectName: "Backoffice",comment:"Developing web based framework for Data Management (cockpit NG) and backoffice module with ZK, hybris platform, spring etc. Scrum master activities.",technologies:[{techName:"Java"},{techName:"Spring Framework"},{techName:"ZK Framework"}]},
      {projectName: "Presales demos",comment:"Prepared more than 60 PoC of hybris platform, developing in Java, spring, ZK,JS, jsp, etc.Cooperation with third companies and clients.",technologies:[{techName:"Java"},{techName:"Spring Framework"}]},
      {projectName: "Facebook app 'Capitol Momentum'",comment:"Facebook Application that was utilized on the US market. The application allows for contacting Federal, State and Local politicians by leveraging Facebook platform. This platform has attracted variety of large non-profit organizations with global reach (such as Habitat for Humanity) and variety of American Universities. Application currently disabled",technologies:[{techName:"Java"},{techName:"Spring Framework"},{techName:"Hibernate"},{techName:"JEE"},{techName:"TDD"}]},
      {projectName: "B2B application",comment:"b2b web platform: task report tool that helps managing support activities",technologies:[{techName:"Java"},{techName:"Spring Framework"},{techName:"Hibernate"},{techName:"JSF"},{techName:"Oracle DB"}]}
    ]
    ,otherProjects: [
      {projectName: "Master's thesis - 'managing data from multiple accelerometers'",comment:"Desktop app, written with pure TDD that support analysis of human movement",technologies:[{techName:"Win Forms"},{techName:".Net"},{techName:"Spring Framework"}]},
      {projectName: "Freelancer",comment:"Desktop and Web apps. Mostly small projects",technologies:[{techName:"Win Forms"},{techName:".Net"},{techName:"Spring Framework"}]},
      {projectName: "This page",comment:"Simple web portfolio written with Bootstrap",technologies:[{techName:"Meteor JS"},{techName:"Twitter Bootstrap"}]},
      {projectName: "Arduino projects",comment:"Simple arduino projects with temperature, humidity sensors",technologies:[{techName:"Arduino"}]}
    ]
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}