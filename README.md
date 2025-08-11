# Cfarers.io - AI Agentic Architecture

This architecture outlines AI agents for Cfarers.io V.0.0.1(AI).

```mermaid
flowchart TD

    %% Core Data Layer
    DataHub[(Central Data Hub)]
    DB[(Candidate & Course Database)]
    API[(External APIs: Job Boards, Training Providers, Regulations)]
    
    %% User Types
    Seafarer[Seafarer / Job Seeker]
    Recruiter[Recruiter / Hiring Manager]
    CourseHost[Course Host / Training Provider]
    
    %% Existing Agents
    EducationAgent[Education Pathway AI Agent]
    CareerMatchAgent[Career Matchmaking AI Agent]
    ComplianceAgent[Compliance & Certification AI Agent]
    CommunityAgent[Community Engagement AI Agent]
    
    %% New Agents
    JobCoachAgent[Job Coach AI Agent]
    RecruiterAgent[Recruiter Assistant AI Agent]
    HostSuccessAgent[Course Host Success AI Agent]
    TrendsAgent[Global Maritime Trends AI Agent]
    
    %% Flows
    Seafarer --> JobCoachAgent
    JobCoachAgent --> EducationAgent
    JobCoachAgent --> CareerMatchAgent
    EducationAgent --> DB
    CareerMatchAgent --> DB
    ComplianceAgent --> DB

    Recruiter --> RecruiterAgent
    RecruiterAgent --> CareerMatchAgent
    RecruiterAgent --> ComplianceAgent

    CourseHost --> HostSuccessAgent
    HostSuccessAgent --> EducationAgent
    HostSuccessAgent --> CommunityAgent

    TrendsAgent --> EducationAgent
    TrendsAgent --> CareerMatchAgent
    TrendsAgent --> HostSuccessAgent
    TrendsAgent --> CommunityAgent

    %% Data Layer Connections
    API --> TrendsAgent
    API --> ComplianceAgent
    DB --> CareerMatchAgent
    DB --> RecruiterAgent
    DB --> EducationAgent
    DB --> HostSuccessAgent

    %% Central Hub
    EducationAgent --> DataHub
    CareerMatchAgent --> DataHub
    ComplianceAgent --> DataHub
    JobCoachAgent --> DataHub
    RecruiterAgent --> DataHub
    HostSuccessAgent --> DataHub
    TrendsAgent --> DataHub
