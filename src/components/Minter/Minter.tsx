import { useRef, useState } from "react";
import { Text, Group, Button, createStyles, Title, Input } from "@mantine/core";
import { Dropzone, MIME_TYPES, FileWithPath } from "@mantine/dropzone";
import { IconCloudUpload, IconX, IconDownload } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    margin: 50,
  },

  dropzone: {
    borderWidth: 1,
    paddingBottom: 50,
  },

  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },

  control: {
    position: "absolute",
    width: 250,
    left: "calc(50% - 125px)",
    bottom: -20,
  },
}));

export function Minter() {
  const { classes, theme } = useStyles();
  const openRef = useRef<() => void>(null);
  const [files, setFiles] = useState<FileWithPath[]>([]);

  return (
    <>
      <div className={classes.wrapper}>
        <Title
          style={{
            textAlign: "center",
            marginBottom: 20,
          }}
          order={3}
        >
          Upload your Asset Image
        </Title>
        <Dropzone
          openRef={openRef}
          onDrop={setFiles}
          className={classes.dropzone}
          radius="md"
          accept={[MIME_TYPES.png, MIME_TYPES.jpeg]}
          maxSize={30 * 1024 ** 2}
        >
          <div style={{ pointerEvents: "none" }}>
            <Group position="center">
              <Dropzone.Accept>
                <IconDownload
                  size={50}
                  color={theme.colors[theme.primaryColor][6]}
                  stroke={1.5}
                />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <IconX size={50} color={theme.colors.red[6]} stroke={1.5} />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <IconCloudUpload
                  size={50}
                  color={
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[0]
                      : theme.black
                  }
                  stroke={1.5}
                />
              </Dropzone.Idle>
            </Group>

            <Text align="center" weight={700} size="lg" mt="xl">
              <Dropzone.Accept>Drop files here</Dropzone.Accept>
              <Dropzone.Reject>Pdf file less than 30mb</Dropzone.Reject>
              <Dropzone.Idle>Upload Image</Dropzone.Idle>
            </Text>
          </div>
        </Dropzone>

        <Button
          className={classes.control}
          size="md"
          radius="xl"
          onClick={() => openRef.current?.()}
        >
          Select files
        </Button>
      </div>
      <div>
        <img
          width={500}
          style={{ display: "block", margin: "auto" }}
          src={files.length ? URL.createObjectURL(files[0]) : ""}
        />
      </div>
      <div
        style={{
          width: 500,
          margin: "auto",
          marginTop: 50,
        }}
      >
        <Text align="center" weight={700} size="lg" mt="xl" mb={"md"}>
          {files.length ? files[0].name : ""}
        </Text>
        <Input.Wrapper label="Asset Name" required mb={"md"}>
          <Input placeholder="Asset Name" />
        </Input.Wrapper>
        <Input.Wrapper label="Description" required mb={"md"}>
          <Input placeholder="Description" />
        </Input.Wrapper>
        <Input.Wrapper label="Price" required mb={"md"}>
          <Input placeholder="Price" />
        </Input.Wrapper>
        <Input.Wrapper label="Total Quantity" required mb={"md"}>
          <Input placeholder="Total Quantity" />
        </Input.Wrapper>
        <Button fullWidth mb={"lg"}>
          Submit
        </Button>
      </div>
    </>
  );
}
