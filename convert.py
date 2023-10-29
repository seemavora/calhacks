import pandas as pd
import numpy as np
data = pd.read_csv("./face.csv")
possID = list(set(data['Id']))
unique_id = {}

for index, row in data.iterrows():
    # print(data['Id'][index])
    if data['Id'][index] in unique_id:
        feelings = row[['Amusement', 'Anger', 'Anxiety', 'Boredom', 'Concentration', 'Confusion', 'Doubt', 'Excitement', 'Fear', 'Interest', 'Joy', 'Realization', 'Sadness']]
        max_feeling_index = np.argmax(feelings.values)
        feeling_max = feelings.index[max_feeling_index]
        if (feeling_max in unique_id[data['Id'][index]].keys()):
            unique_id[data['Id'][index]][feeling_max] +=1
        else:
            unique_id[data['Id'][index]][feeling_max] =1
        
        # print(feeling_max, " for user ", data['Id'][index])
    # if (data['Id'][index] in unique_id):
    #     # maxVal = row[['Amusement', 'Anger']].max(axis=0)
    #     rowVal =row[['Amusement','Anger','Anxiety','Boredom','Concentration','Confusion','Doubt','Excitement','Fear','Interest','Joy','Realization','Sadness']]
    #     print(data[['Amusement', 'Anger', 'Anxiety', 'Boredom', 'Concentration', 'Confusion', 'Doubt', 'Excitement', 'Fear', 'Interest', 'Joy', 'Realization', 'Sadness']].dtypes)

    #     # feeling_max = row[['Amusement', 'Anger', 'Anxiety', 'Boredom', 'Concentration', 'Confusion', 'Doubt', 'Excitement', 'Fear', 'Interest', 'Joy', 'Realization', 'Sadness']].idxmax()

    #     # maxVal = row[['Amusement','Anger','Anxiety','Boredom','Concentration','Confusion','Doubt','Excitement','Fear','Interest','Joy','Realization','Sadness']].max(axis=0)
    #     # feeling_max= data[['Amusement','Anger','Anxiety','Boredom','Concentration','Confusion','Doubt','Excitement','Fear','Interest','Joy','Realization','Sadness']].idxmax(axis=0)
    #     # print(feeling_max, " for user ", data['Id'][index])
    else:
        unique_id[data['Id'][index]]={}
        feelings = row[['Amusement', 'Anger', 'Anxiety', 'Boredom', 'Concentration', 'Confusion', 'Doubt', 'Excitement', 'Fear', 'Interest', 'Joy', 'Realization', 'Sadness']]
        max_feeling_index = np.argmax(feelings.values)
        feeling_max = feelings.index[max_feeling_index]
        unique_id[data['Id'][index]][feeling_max] =1
        print(feeling_max, " for user ", data['Id'][index])
print(unique_id)
    # print(inde,'Amusement','Anger'], row['Anxiety'], row['Boredom'], row['Concentration'], row['Confusion'], row['Doubt'], row['Excitement'], row['Fear'], row['Interest'], row['Joy'], row['Realization'], row['Sadness'])
# print(possID)

