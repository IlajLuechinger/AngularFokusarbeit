export interface Task {
  aufgabeID?: number,
  titel?, string,
  beschreibung?: string,
  userStory?: string,
  sollZeit?: number,
  istZeit?: number,
  sollDatum?: any,
  status?: string,
  personID?: number,
  projektID?: number
}
