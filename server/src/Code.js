var firebase;
var SCOPES = FirebaseApp.Firebase.SCOPES;

function doGet() 
{
	return HtmlService
      .createTemplateFromFile('index')
      .evaluate();

}

function getFirebase() {
    if (!firebase) {
      const projectId = PropertiesService.getScriptProperties().getProperty('projectId');
      Logger.log('The firebase was null',projectId); 
      firebase = FirebaseApp.getFirebase(projectId);
    }
    return firebase;
}

function getPosts() {
    var firebase = getFirebase();
    var props = getProps();
    try {
        var authToken = firebase.authToken(props.fire_email, props.fire_key.replace(/\\n/g, "\n"), [SCOPES.FIRESTORE]);
        var firestore = firebase.firestore(authToken);
        var posts = firestore.getDocuments("posts");
        return posts;
    }
    catch (error) {
        Logger.log(error);
    }
}
function getRemoteConfig() {
    var firebase = getFirebase();
    var props = getProps();
    try {
        var authToken = firebase.authToken(props.rc_email, props.rc_key.replace(/\\n/g, "\n"), [SCOPES.REMOTE_CONFIG]);
        var remoteConfig = firebase.remoteConfig(authToken);
        var config = remoteConfig.get();
        return config;
    }
    catch (error) {
        Logger.log(error);
        throw error;
    }
}

function getProps() {
    var scriptProperties = PropertiesService.getScriptProperties();
    var props = scriptProperties.getProperties();
    return props;
}

function getRandomNumbers()
{
	return AppLib.getRandomNumbers();
}

function setProperties(properties) {
  var scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.setProperties(properties, false);
} 