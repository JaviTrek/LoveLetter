# Love letter project
## TODO 
### Idea planning
- What content should be on the messages?
  - Just text?
  - Images?
    - Where would the images be stored? I've never have done that lol


### Front-end
- Create home page
- Create dynamic page for showing current and previous messages, like a gallery
- Create page to display current message
- Implement logic to only fetch messages with the current date of before
- Create sign-in page (maybe just a click bebo or beeber)
- Create page to send messages
- Make site mobile responsive

### Back-end
- Connect to MongoDB (Vercel serverless functions?)
- Only pull current or future messages
- allow creation of future messages



# UML

- Login (Asa or Javi)
  - Homepage
    - Read current message
      - Check current date to see if message
    - See previous messages
      - See all messages before that
    - Write message
      - Set text for it (allow markdown/html?)
      - Set date for when text is available
      - Send

# Hosting
- AWS: Has a lot longer setup time
- Vercel: less time but maybe less efficient?
Solution: Try Vercel, if not move to AWS.