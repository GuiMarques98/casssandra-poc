FROM rabbitmq:3.8.16-management
COPY ./rabbitmq_delayed_message_exchange-3.8.17.8f537ac.ez plugins/
RUN rabbitmq-plugins enable rabbitmq_delayed_message_exchange rabbitmq_tracing
