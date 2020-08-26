# What is Mastodon?
## A quick explainer
You've probably already read a one-liner like "Mastodon is a federated social network", and most of it makes sense, except that one word "federated" that seems both needlessly pompous and confusingly opaque.  
Most of the misunderstandings and confusion comes down to what federation means, why it's desirable, and what it offers to users of a service like Mastodon.   
  
## Federation
Really, all that "federation" means is that Mastodon isn't running on one big server, but rather a collection of smaller, separately-owned servers, and that these servers talk to each other to provide the full Mastodon experience.  
This isn't unlike email. You can sign up for an email address with any number of providers, like GMail, Hotmail, ProtonMail, and many others. But no matter what provider you're using, you can send and receive emails with people on any other provider. The reason this works is because email providers all agree to use a set of technical protocols, which allows them to deal with emails to and from any other provider.  
  
Mastodon works in pretty much the same way. There are plenty of different providers, called instances, and you can create your account with any of them. And like email, your full identity contains both your chosen user name and the name of the instance your account is with. So on Mastodon, I am [@gaeel@stream.void.garden](https://stream.void.garden/@gaeel). The first part (@gaeel) is my username, and the second part (@stream.void.garden) is the instance that I'm hosted at.  
I can talk to people on other instances as if they were on mine, because our instances will sync up and share the information. [This is what that looks like](https://stream.void.garden/@gaeel/103041608240830953). If you click that link, you'll see that I was able to comment on a post by a user from a separate instance to mine, and they replied to my comment.  
  
## So what's the point?
There are a few advantages to this, some of them are arguably political/philosophical, but others are more tangible, so let me start with those.

### Varying community scales & values
My instance is just me and a few close friends. Instances can go from a single person self-hosting their page to thousands of people all on one server. Each instance also differs in culture and mood. My instance is about providing a comfortable, cozy space, [merveilles.town](https://merveilles.town) is a community of artists and designers who focus on technology and solarpunk, [mastodon.social](https://mastodon.social) is a big open-door without much of a central focus, etc...  
Your view of the rest of the federation depends on who you follow, and how your instance interacts with other instances, so the instance you pick will affect your Mastodon experience, but picking an instance doesn't cut you off from the rest of the federation, and you can always manually follow anyone from any instance.  

### Varying software & rules
Some instances run the vanilla [Tootsuite Mastodon](https://github.com/tootsuite/mastodon) software. But there are other options available. My instance runs [Hometown](https://github.com/hometown-fork/hometown), which is close to a vanilla Mastodon, but with a few extras, like local-only posting (posts that can only be seen by members of my instance). There's also the delightfully experimental [glitch-soc](https://github.com/glitch-soc/mastodon/) that seems to be popular and brings a whole swathe of fun features for the users of instances that run on it.  
Beyond that, some instances run completely different server software, like [Pleroma](https://git.pleroma.social/pleroma/pleroma)  
  
Also, each instance will have its own rules & moderation policy.  
  
So whether you're looking for certain features, or the ability to post or avoid certain types of content, then you can pick a server ran by people who are looking to provide that experience for you.

<br>

## So what is Mastodon, actually?
It's a big family of small to medium social networking sites that can all talk to each other.  
It superficially looks like Twitter, but the main point is that you can be a part of a community that feels right to you, has the culture and features that you want, and you can also interact with everyone else in the big wide federated Mastodon network.  

And thats it!  

Although, there *is* more...

+++ Unfold this if you want more ~political/technical~ information about what makes Mastodon special
### Politics & philosophy
While I use Twitter, Facebook, and Reddit, I'm slightly worried about what it means that we've handed over control of our data and social interactions to a handful of companies. I'm really not a fan of what people like Jack Dorsey and Mark Zuckerberg stand for, and the idea that it's either "use their software" or "be left out" is really ugly.  
Federated software is a great way to resist this kind of monopoly. If my users decide that I'm an asshole and they don't want to be associated with me any more, they can leave and use a different instance instead. With Twitter and Facebook, you can't do that. Either you use *their* platform, or you give up your place in the community. Think about all of the times you wanted to leave Facebook because of their horrible business practices, but didn't because Facebook is your only real contact with a lot of your family and old friends. With emails and Mastodon, you can create a new account elsewhere and just give your friends your new address.  

### Censorship & moderation
Federation also means that Mastodon is both more censorship-resistant than centralised networks, but moderation can be much more effective.  
It's censorship-resistant because anyone can set up their own instance, there's no single entity that can be bribed/coerced into shutting down dissenting views.  
But moderation is also very effective, since instances generally have a few hundred users each, that means there's a high admin/moderator to user ratio, often with the admin/moderators actively aware of the activities of all of their users, quickly calling to order those who ignore instance rules. And finally, moderators can block entire instances outright, when the moderators of an offending instance fail to act against, or actively encourage, disruptive behaviour.  
Porn is a good example of this. Hosting porn is touchy, some users don't want to see it, some countries want to regulate against it, yet porn is a legal, everyday part of the internet that many users want to see and post. Tumblr and other websites shutting down porn accounts have made it very hard for sex workers to safely interact with their communities.  
On Mastodon, a sex worker can choose an instance that is porn-friendly, or set up their own instance, and they can go about posting any content they like. The moderators of their sex-positive instance won't oppose it.  
An instance for children, or who's users don't want to be exposed to sexual imagery might block porn-friendly instances, but that doesn't stop the blocked instances from reaching the communities who *do* want to view their content.  
Similarly, the cliché that "there are no Nazis on Mastodon" is, flatly, false. But instance administrators look out for each other, and warn each other of instances that welcome fascists, harassers, or illegal content. An administrator who pays some attention to these disruptive communities can keep their users safe simply by blocking entire instances as they pop up.  
  
### Ownership & monetisation
Mainstream social networks are designed to make money, they do this by feeding you ads and selling access to the data you generate. This means their intentions are at odds with your wants and needs.  
Some federated instances might be out to make some money, but most are ran by enthusiasts who just want somewhere to hang out online. This completely flips the script. A Mastodon admin is trying to create a friendly space for themself and their friends, and the hosting costs are usually paid for either by the admin or with a donation box. This kind of financial arrangement doesn't scale well, but is perfect for the micro-scale communities that Mastodon is based on.  
In effect, Mastodon is owned by the people who use it, rather than a ruling class seeking to benefit from its users.  
This also means that there's a much tighter loop between users and administrators on Mastodon. Users can easily get in touch with their administrator, and request new features. I've seen instances run little polls to ask their communities if they'd like to upgrade to new versions. Imagine Twitter actually *asking* you if you'd like [tweets to be renamed florps](https://twitter.com/actioncookbook/status/684515262712967170), rather than just rolling out updates in secret.

### ActivityPub and the Fediverse
The mechanism that enables Mastodon to federate is called [ActivityPub](https://activitypub.rocks/), it's a standardised protocol that enables web services to talk to each other. Mastodon can talk to any service that implements ActivityPub. [PeerTube](https://joinpeertube.org/) is a federated video sharing network. [WriteFreely](https://writefreely.org/) is a federated blogging platform. [Pixelfed](https://github.com/pixelfed/pixelfed) is an image sharing network.  
All of these are built with ActivityPub. This means they're all part of the same federation. So you can follow people, and reply to posts on those services from your Mastodon account. Imagine if you could reply to a Youtube video with your Facebook account and be upvoted by someone on Twitter. That's just the way things work in federated networks.  


<hr>

Mastodon, ActivityPub and the Fediverse bring me hope for a future where our online lives aren't completely owned by a few companies, and they're a lovely combination of the forums I used to run for my mates, and the more modern style of social interaction. They're a sign that we don't *need* Twitter & co to have an online presence. They make the internet simultaneously smaller and bigger than before. Tiny communities with their weird inside jokes, but all tied together in a network that can healthily grow as large as it needs to be.  
I don't believe this mechanism is the be-all and end-all of social networking. Notably, I'd like to see a move away from [DNS](https://en.wikipedia.org/wiki/Domain_Name_System)-based identification, so that users can fully own their online identity. But Mastodon is a user-friendly way to experience the web as it could be, and for those of us who use it on a regular basis, already is...  
  
If you'd like to make yourself an account on the fediverse, [this instance list](https://instances.noct.zone) is a good place to look for an instance that'll suit you.
+++

%YAML 1.2
---
title: What is Mastodon?
tags:
  - technology
  - blog