from openai import OpenAI
client = OpenAI()

client.files.create(
  file=open("reviews.jsonl", "rb"),
  purpose="fine-tune"
)

client.fine_tuning.jobs.create(
  training_file="reviews", 
  model="gpt-3.5-turbo"
)