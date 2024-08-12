'use client';

import { useState, useEffect, useRef } from 'react';
import Heading from '@/components/Heading';
import { MessageSquare } from 'lucide-react';

import {
  Box,
  Button,
  TextField,
  Stack,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from '@mui/material';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

import { useRouter } from 'next/navigation';

import bgImage from '@/public/headstarter_bg.jpeg';
import SendIcon from '@mui/icons-material/Send';

export default function Home() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        'Hi. I am the Headstarter virtual assistant. How can I help you today?',
    },
  ]);

  const [text, setText] = useState('');

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    setText('');
    setMessages((messages) => [
      ...messages,
      { role: 'user', content: text },
      { role: 'assistant', content: '' },
    ]);

    // console.log('Payload:', JSON.stringify({ role: 'user', content: text }));
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ role: 'user', content: text }),
    }).then(async (res) => {
      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      let result = '';
      return reader.read().then(function processText({ done, value }) {
        if (done) {
          return result;
        }
        const text = decoder.decode(value || new Int8Array(), { stream: true });
        setMessages((messages) => {
          let lastMessage = messages[messages.length - 1];
          let otherMessages = messages.slice(0, messages.length - 1);
          return [
            ...otherMessages,
            {
              ...lastMessage,
              content: lastMessage.content + text,
              role: 'assistant',
            },
          ];
        });
        return reader.read().then(processText);
      });
    });
  };

  return (
    <Box
      width={'100vw'}
      height={'100vh'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      sx={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
      p={6}
    >
      {/* <Heading
          title="Conversation"
          description="Our most advanced conversation model"
          icon={MessageSquare}
          iconColor="text-violet-500"
          bgColor="bg-violet-500/10"
        /> */}

      {/* <Stack
        directon={'column'}
        width="600px"
        height="700px"
        border="1px solid black"
        borderRadius={4}
        justifyContent="flex-end"
        p={2}
        gap={2}
      >
        <Stack
          direction={'column'}
          spacing={2}
          flexGrow={1}
          overflow={'auto'}
          maxHeight={'100%'}
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              display={'flex'}
              justifyContent={
                message.role === 'assistant' ? 'flex-start' : 'flex-end'
              }
            >
              <Box
                bgcolor={
                  message.role === 'assistant'
                    ? 'primary.main'
                    : 'secondary.main'
                }
                color={'white'}
                borderRadius={11}
                p={2}
              >
                {message.content}
              </Box>
            </Box>
          ))}
          <div ref={messagesEndRef} />
        </Stack>

        <Stack flexDirection={'row'} gap={2}>
          <TextField
            label="Message"
            fullWidth
            value={text}
            onChange={(event) => setText(event.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                sendMessage();
              }
            }}
          />
          <Button variant="contained" size="medium" onClick={sendMessage}>
            Send
          </Button>
        </Stack>
      </Stack> */}

      <Stack
        direction={'column'}
        width="700px"
        height="700px"
        border="1px solid #333"
        borderRadius={5}
        justifyContent="flex-end"
        p={1.8}
        gap={2}
        bgcolor="#161616"
      >
        <Stack
          direction={'column'}
          spacing={2}
          flexGrow={1}
          overflow={'auto'}
          maxHeight={'100%'}
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              display={'flex'}
              justifyContent={
                message.role === 'assistant' ? 'flex-start' : 'flex-end'
              }
            >
              <Box
                bgcolor={message.role === 'assistant' ? '#163257' : '#101838'}
                color={'white'}
                borderRadius={11}
                p={2}
              >
                {message.content}
              </Box>
            </Box>
          ))}
        </Stack>

        <Stack flexDirection={'row'} gap={1}>
          <TextField
            label="Message"
            fullWidth
            value={text}
            onChange={(event) => setText(event.target.value)}
            InputLabelProps={{ style: { color: '#bbb' } }}
            InputProps={{
              style: { color: '#fff' },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#555',
                },
                '&:hover fieldset': {
                  borderColor: '#777',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#888',
                },
              },
            }}
          />
          <Button
            variant="contained"
            size="medium"
            endIcon={<SendIcon />}
            onClick={sendMessage}
            sx={{ borderRadius: 4 }}
          >
            Send
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
