const linksSocialMedia = {
  github: 'evelynschiller',
  linkedin: 'evelynschiller',
  instagram: 'eveschiller',
  behance: 'eveschiller',
  discord: 'evelynschiller'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(Response => Response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGitHub.href = data.html_url
      userAvatar.src = data.avatar_url
      userLogin.textContent = data.login
      userTitle.textContent = data.name
    })
}

getGitHubProfileInfos()
