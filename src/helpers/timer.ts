export class Timer {
  private status: 'on' | 'off' | 'paused';

  private counter: number;

  private startTime: number;

  constructor() {
    this.status = 'off';
    this.counter = 0;
    this.startTime = 0;
  }

  start() {
    if (this.status === 'off') {
      this.startTime = Date.now();
      this.status = 'on';
      this.updateCounter();
    } else if (this.status === 'paused') {
      this.status = 'on';
      this.updateCounter();
    }
  }

  pause() {
    if (this.status === 'on') {
      cancelAnimationFrame(this.startTime);
      this.status = 'paused';
    }
  }

  stop() {
    cancelAnimationFrame(this.startTime);
    this.counter = 0;
    this.status = 'off';
  }

  getCounterValue() {
    return this.counter;
  }

  private updateCounter() {
    const currentTime = Date.now();
    const elapsedTime = Math.floor((currentTime - this.startTime) / 1000);

    this.counter = elapsedTime;

    if (this.status === 'on') {
      this.startTime = requestAnimationFrame(() => this.updateCounter());
    }
  }
}

// TODO FAZER UM TIMER SÓ PARA TODO O APP QUE DEVE RODAR
// OU FORA DO REACT OU NO FOOTER

/*   useEffect(() => {
    // testar essa logica com um simples innertext depois

    let lastTime = new Date().getTime();
    const timer = () => {
      const currentTime = new Date().getTime();

      if (currentTime - lastTime >= 1000) {
        console.log('refTaskTimer', refTaskTimer);

        lastTime = currentTime;
        refTaskTimer.current += 1;
      }
      return requestAnimationFrame(timer);
    };

    const timerId = timer();

    return () => {
      cancelAnimationFrame(timerId);
    };
  }, []); */
