function doGet() 
{
	return HtmlService
      .createTemplateFromFile('index')
      .evaluate();

}

function getRandomNumbers()
{
	return AppLib.getRandomNumbers();
}

function setProperties(properties) {
  var scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.setProperties(properties, false);
}