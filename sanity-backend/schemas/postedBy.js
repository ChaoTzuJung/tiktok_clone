export default {
    name: 'postedBy',
    title: 'Posted By',
    type: 'reference',
    // keep track of which comments has the user posted
    to: [{ type: 'user' }]
} 