from openai import OpenAI
client = OpenAI()

data_path = "/Users/wyatt/Documents/gavin-or-gpt/snippets/data/reviews.jsonl"

client.files.create(
  file=open(data_path, "rb"),
  purpose="fine-tune"
)