class Task {
  status: boolean = false;

  constructor(public description: string, public priority: string) {}

    statusComplete() {
      this.status = true;
    }
}
