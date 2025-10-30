class Empleado{
    //atribiutos

    //constructor

    //constructor vacio
  constructor(cc, nombres, direccion, email, telefono, sueldoBase, tipoEmpleado, tipoBonificacion){
        this.cc = cc;
        this.nombres = nombres;
        this.direccion = direccion;
        this.email = email;
        this.telefono = telefono;
        this.sueldoBase = parseFloat(sueldoBase);
        this.tipoEmpleado = tipoEmpleado;
        this.tipoBonificacion = tipoBonificacion;
        this.saldoTotal = 0;
    }

  static calcularAdicion(tipo) {
    switch ((tipo || '').toUpperCase()) {
      case 'A': return 200000;
      case 'B': return 150000;
      case 'C': return 100000;
      case 'D': return 50000;
      default: return 0;
    }
  }

  calcularSaldoTotal() {
    let adicion = 0;
        if(this.tipoBonificacion === "A") adicion = 200000;
        else if(this.tipoBonificacion === "B") adicion = 150000;
        else if(this.tipoBonificacion === "C") adicion = 100000;
        else if(this.tipoBonificacion === "D") adicion = 50000;

        this.saldoTotal = this.sueldoBase + adicion;
    }
  }

    //metodos