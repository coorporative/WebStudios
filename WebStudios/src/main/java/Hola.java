import java.util.Calendar;
import java.util.GregorianCalendar;

public class Hola {

	public static void main(String[] args) {

		GregorianCalendar fh1 = new GregorianCalendar();
		System.out.println("Año: " + fh1.get(Calendar.YEAR) + " Hora: " + fh1.get(Calendar.HOUR_OF_DAY));

	}

}