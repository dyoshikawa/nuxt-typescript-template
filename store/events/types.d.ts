export interface Event {
  id: number
  title: string
  content: string
}

export interface EventsState {
  events: Event[]
}
