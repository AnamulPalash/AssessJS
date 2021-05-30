export function ID() {
return Math.floor(new Date().valueOf() * Math.random());
}

// Local Storage
export function getItem(key, defaultValue) {
  let value = localStorage.getItem(key);
  if (value) {
    value = JSON.parse(value);
    return value;
  }
  return defaultValue;
}

export function setItem(key, value) {
  value = JSON.stringify(value);
  localStorage.setItem(key, value);
}

export function removeItem(key) {
  localStorage.removeItem(key);
}

export function getAllNotes() {
  if (sessionStorage.getItem("notes")) {
    if (JSON.parse(sessionStorage.getItem("notes")).length > 0) {
      return JSON.parse(sessionStorage.getItem("notes"));
    } else {
      return [];
    }
  }
  return [];
}

export function setAllNotes(data) {
  sessionStorage.setItem("notes", JSON.stringify(data));
}

export function getSessionItem(key, defaultValue) {
  let value = sessionStorage.getItem(key);
  if (value) {
    value = JSON.parse(value);
    return value;
  }
  return defaultValue;
}

export function setSessionItem(key, value) {
  value = JSON.stringify(value);
  sessionStorage.setItem(key, value);
}

export function removeSessionItem(key) {
  sessionStorage.removeItem(key);
}
