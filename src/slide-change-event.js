export class SlideChangeEvent extends CustomEvent {
  constructor(detail) {
    super("slidechange", { detail });
  }
}
