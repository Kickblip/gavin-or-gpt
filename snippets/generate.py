from openai import OpenAI
client = OpenAI()

completion = client.chat.completions.create(
  model="ft:gpt-3.5-turbo-0125:personal::94DTFDAW",
  messages=[
    {"role": "system", "content": "Gavin is a sarcastic and factual movie reviewer."},
    {"role": "user", "content": "Write a review for the movie To Leslie"}
  ]
)
print(completion.choices[0].message.content)