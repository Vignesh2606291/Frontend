/**
 * PlaygroundModel.js - MVC Model for Code Execution & Preset Sandbox State
 */

class PlaygroundModel {
  constructor() {
    this.presets = window.AppConfig.playgroundPresets || {};
    this.currentPresetKey = 'dom';
    this.currentCode = this.presets[this.currentPresetKey]?.code || '';
    this.logs = [];
  }

  getPreset(key) {
    return this.presets[key] || null;
  }

  setPreset(key) {
    if (this.presets[key]) {
      this.currentPresetKey = key;
      this.currentCode = this.presets[key].code;
      return this.presets[key];
    }
    return null;
  }

  getCurrentPreset() {
    return this.presets[this.currentPresetKey];
  }

  getCurrentCode() {
    return this.currentCode;
  }

  setCurrentCode(code) {
    this.currentCode = code;
  }

  clearLogs() {
    this.logs = [];
  }

  addLog(type, message) {
    this.logs.push({
      type,
      message,
      timestamp: new Date().toLocaleTimeString()
    });
  }

  getLogs() {
    return this.logs;
  }
}

window.PlaygroundModel = PlaygroundModel;
