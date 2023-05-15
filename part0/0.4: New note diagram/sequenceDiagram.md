After a user puts the input and clicks button 

## Sample sequence diagram
```mermaid
sequenceDiagram;
Title: User puts the input and clicks button 

Browser->Server(new_inputs): HTTP POST
Server-->Browser: Redirect with the status 302
Browser->>Server: HTTP GET: Reloads
Server-->Browser: HTML Document
```
