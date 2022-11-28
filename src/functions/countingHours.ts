import { IscheduledHours } from "../interfaces/timeSheet";

export const calculateWorkedHours = (hours: IscheduledHours[]): string => {
  const appropriatehoursArray = hours.map((hour) => {
    return hour.appropriatehours;
  });
  const sumAppropriateHours = appropriatehoursArray.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue;
    },
    0
  );
  const projHoursArray = hours.map((hour) => {
    return hour.projecthours;
  });

  const sumProjHours = projHoursArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  const appropriatedHours = Math.floor(sumAppropriateHours);

  const totalOvertime = sumAppropriateHours - sumProjHours;
  const workedHour = Math.floor(totalOvertime);
  const workedMinutes = (workedHour - totalOvertime) * 60;

  const totalWorkedHours = `${appropriatedHours.toFixed(0)}:${(
    workedMinutes * -1
  ).toFixed(0)}`;

  if (totalWorkedHours.length === 4) {
    const tratedTime = totalWorkedHours.padEnd(5, "0");

    return tratedTime;
  }

  return totalWorkedHours;
};

export const calculateTotalMissingHours = (
  hours: IscheduledHours[]
): string => {
  const appropriatehoursArray = hours.map((hour) => {
    return hour.appropriatehours;
  });
  const sumWorkedHours = appropriatehoursArray.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue;
    },
    0
  );

  const projHoursArray = hours.map((hour) => {
    return hour.projecthours;
  });
  const sumProjHours = projHoursArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  const totalHours = sumWorkedHours - sumProjHours;

  const negativeHours = Math.floor(totalHours);

  const missingMinutes = (totalHours - negativeHours) * 60;

  const time = `${negativeHours}:${missingMinutes.toFixed(0)}`;

  if (negativeHours >= 0) {
    return "00:00";
  }
  if (time.length === 4) {
    const tratedTime = time.padEnd(5, "0");

    return tratedTime;
  }
  return time;
};

export const calculateTotalExtraHours = (hours: IscheduledHours[]): string => {
  const projHoursArray = hours.map((hour) => {
    return hour.projecthours;
  });
  const sumProjHours = projHoursArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  const appropriatehoursArray = hours.map((hour) => {
    return hour.appropriatehours;
  });
  const sumAppropriateHours = appropriatehoursArray.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue;
    },
    0
  );

  const totalHours = sumAppropriateHours - sumProjHours;

  const workedHours = Math.floor(totalHours);

  const workedMinutes = (workedHours - totalHours) * 60;

  const time = `${workedHours}:${(workedMinutes * -1).toFixed(0)}`;

  if (time.length === 3) {
    const tratedTime = time.padStart(4, "0");
    const trated = tratedTime.padEnd(5, "0");

    return trated;
  }
  if (workedHours <= 0) {
    if (workedMinutes <= 0) {
      return "00:00";
    }
    return time;
  }
  return time;
};

export const calculateTotalProjectHours = (
  hours: IscheduledHours[]
): string => {
  const projHoursArray = hours.map((hour) => {
    return hour.projecthours;
  });
  const sumProjHours = projHoursArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  const totalHours = sumProjHours;

  const workedHours = Math.floor(totalHours);

  const time = `${workedHours}:`;

  if (time.length === 3) {
    const trated = time.padEnd(5, "0");

    return trated;
  }

  return time;
};
