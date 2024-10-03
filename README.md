# Pujo Atlas Site

<img src="https://progress-bar.xyz/100/?title=Atlas+v1.0+Completion" alt="Progress Bar">
<img src="https://progress-bar.xyz/0/?title=Atlas+v1.1+Completion" alt="Progress Bar">

Welcome to Pujo Atlas - your ultimate guide for Pandal Hopping during Durga Puja in Kolkata! This open-source project aims to provide a comprehensive and user-friendly webapp that lists all the Durga Pujas happening around Kolkata and offers a host of features to make your pandal hopping experience seamless and enjoyable.

## Our Trending Pandals Algorithm

1. **Initialize Venues**

   - For each venue, set:
     - `score = 100`
     - `score_floor = 0`
     - `updated_at = current_time`
     - `last_score = 0` (initially no score change)

2. **Search Result Click Handling**

   - When a user clicks on a venue (e.g., venue B):
     - Increment `score` of the clicked venue (B):
       - `B.score += 2`
       - `B.last_score += 2` (increment reflects the change)
     - Decrement `score` of other venues (A, C):
       - `A.score -= 1`
       - `A.last_score -= 1` (decrement reflects the change)
       - `C.score -= 1`
       - `C.last_score -= 1` (decrement reflects the change)
     - Set `B.updated_at = current_time`

3. **Direction/Navigation Button Click Handling**

   - When a user clicks on the direction/navigation button for a venue (e.g., venue D):
     - Increment `D.score`:
       - `D.score += 3`
       - `D.last_score += 3` (increment reflects the change)
     - Set `D.updated_at = current_time`

4. **Breaking Ties on Score**

   - If venues have the same score:
     - Sort by `updated_at` (most recent positive activity).
     - Increment the score of the most recently updated venue by 1:
       - `most_recent_venue.score += 1`
       - `most_recent_venue.last_score += 1` (increment reflects the change)

5. **Time-Based Exploration Logic**

   - For each venue, check the time since the last update:
     - If `current_time - venue.updated_at > X hours`:
       - Calculate `positive_updates_count` in the last `2X hours`.
       - For each positive update in this period, decrement the score:
         - `venue.score -= positive_updates_count`
         - `venue.last_score -= positive_updates_count` (decrement reflects the change)
       - Ensure `venue.score` does not go below `score_floor`:
         - `if venue.score < venue.score_floor: venue.score = venue.score_floor`

6. **Repeat Steps as Necessary**
   - Continuously monitor and update scores based on user interactions and the time elapsed since the last update.

## Community

For help, discussion about best practices, or any other conversation that would benefit **PujoAtlasKol-Web**: [Join the Pujo Atlas Discord Server](https://discord.com/invite/xxSXWYf6d4)

## Contributors

We 💖 contributors! Feel free to contribute to this project but **please read the [Contributing Guidelines](CONTRIBUTING.md) before opening an issue or PR** so you understand the branching strategy and local development environment. We also welcome you to join our [Discord](https://discord.com/invite/xxSXWYf6d4) community for either support or contributing guidance.

![Alt](https://repobeats.axiom.co/api/embed/093db6beff960e2f848bf55bfdb9463f82441031.svg 'Repobeats analytics image')

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Sponsors

A special thank you to **Netlify** and **Cloudflare** for sponsoring **Pujo Atlas**!

<div>
   <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer"><img src="https://www.netlify.com/v3/img/components/netlify-color-accent.svg" alt="Deploys by Netlify" /></a>
   <a href="https://www.cloudflare.com" target="_blank" rel="noopener noreferrer"><img src="https://cf-assets.www.cloudflare.com/slt3lc6tev37/CHOl0sUhrumCxOXfRotGt/081f81d52274080b2d026fdf163e3009/cloudflare-icon-color_3x.png" alt="Cloudflare Badge" height="50px" width="100px" /></a>
</div>
