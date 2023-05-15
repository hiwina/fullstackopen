After a user puts the input and clicks button 

## Sample sequence diagram
``````mermaid

Title: User puts the input and clicks button 

Browser->Server(new_inputs): HTTP POST
Server-->Browser: Redirect with the status 302
Browser->>Server: HTTP GET: Reloads
Server-->Browser: HTML Document
```

```mermaid
sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    Alice-)John: See you later!
