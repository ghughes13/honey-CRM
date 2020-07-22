export default (function (w, d, undefined) {
  var gravityForms = document.querySelectorAll("form")
  var honeyFormSettings = []
  var clientID = 000
  var listID = 000
  var formCategory = [
    "Consultation",
    "Google AdWords",
    "Newsletter",
    "Ask Us Anything",
    "Event",
    "Livestream",
    "TRIpod",
    "Resource Request",
    "Physical Brochure",
    "Career",
    "Warmup",
  ]

  if (gravityForms) {
    for (var i = 0; i < gravityForms.length; i++) {
      var currentForm = gravityForms[i]
      for (var k = 0; k < formCategory.length; k++) {
        if (currentForm.className == formCategory[k]) {
          if (formCategory[k] == "Livestream") {
            listID = 5400
          }
          var formSelector = currentForm.id
          var formType = formCategory[k]
          var formSettings = new formSetting(formSelector, formType)
          honeyFormSettings.push(formSettings)
        }
      }
    }
    addHoneyScripts()
  }

  function formSetting(formSelector, formType) {
    return (
      (this.selector = "#" + formSelector),
      (this.listId = listID),
      (this.formType = formType),
      (this.mappings = {
        firstName: ".name-field input",
        email: ".email-field input",
        company: "company-field input",
        comment: ".comment-field textarea",
      })
    )
  }

  function addHoneyScripts() {
    var url = window.location.href // Returns full URL
    w._honeySettings = {
      clientId: clientID,
      websiteUrl: url,
      forms: honeyFormSettings,
    }
    var head = d.getElementsByTagName("head")[0]
    var tag = d.createElement("script")

    tag.src = "/static/honey-form-validation.js"
    tag.async = true

    document.body.appendChild(tag)
  }
})(window, document)
