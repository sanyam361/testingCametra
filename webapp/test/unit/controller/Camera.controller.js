/*global QUnit*/

sap.ui.define([
	"app/cam/Camera/controller/Camera.controller"
], function (oController) {
	"use strict";

	QUnit.module("Camera Controller");

	QUnit.test("I should test the Camera controller", function (assert) {
		var oAppController = new oController();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});