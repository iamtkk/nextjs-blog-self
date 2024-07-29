import LogstashTransport from "winston-logstash/lib/winston-logstash-latest";
import { createLogger, transports, format } from "winston";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const logger = createLogger({
      level: "info",
      format: format.combine(format.timestamp(), format.json()),
      transports: [
        new transports.Console(),
        new LogstashTransport({
          host: "localhost",
          port: 5045,
        }),
      ],
    });

    const logMessage = {
      service: "globalvegas",
      categroy: "web",
      msg: "logging test - " + new Date().toISOString(),
    };

    logger.info(logMessage);
    logger.warn(logMessage);
    logger.error(logMessage);

    res.status(200).json({ message: "Log recorded" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
